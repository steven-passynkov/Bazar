import Nav_bar from "../../components/nav-bar";
import Footer from "../../components/footer";
import Card from "react-bootstrap/Card";
import Image from 'next/image'
import ReactStars from "react-rating-stars-component";
import { useRouter } from "next/router";
import axios from "axios";
import { useEffect, useState } from "react";
import Spinner from "../../components/spinner";

export default function Profile_page() {
  const router = useRouter();
  const { user } = router.query;
  const [data, setData] = useState(null);

  const stars = {
    size: 30,
    value: 2.5,
    edit: false,
    isHalf: true,
  };

  useEffect(() => {
    if (user) {
      getUserData();
    }
  }, [user]);

  const getUserData = () => {
    axios({
      method: "get",
      url: `http://localhost:3000/api/users?name=${user}`,
    }).then(function (response) {
      setData(response.data);
    });
  };

  return (
    <>
      {data == null ? (
        <Spinner/>
      ) : (
        <div>
          <Nav_bar />
          <Card>
            <Card>
              <Image src={data.picture} width="100px" height="100px"/>
            </Card>
            <Card.Header>{data.nickname}</Card.Header>
            <Card.Text>Date joined: {data.created_at}</Card.Text>
            <Card.Text>Number of items sold</Card.Text>
            <Card.Text>Avrage rating</Card.Text>
            <ReactStars {...stars} />
            <Card.Text>Name adds</Card.Text>
          </Card>
          <Card>
            <Card.Header>{data.nickname} adds</Card.Header>
          </Card>
          <Footer />
        </div>
      )}
    </>
  );
}
