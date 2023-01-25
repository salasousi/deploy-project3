import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import 'bulma/css/bulma.min.css'
import {Card, Media, Content, Heading} from "react-bulma-components"

function Explore({ portfolio, user }) {
  console.log('portfolio is: ', portfolio);

  const Loaded = () => {
    return portfolio.map((port) => (
      <div className="portfolioCard">
        <Card key={port._id}>
          <Card.Image
            size="5by3"
            src={port.screenShots}
            alt="my project should be here"
          />
          <Card.Content>
            <Media>
              <Media.Item>
                <Link to={`/portfolio/${user[0]}`}>
                  <Heading className="Card.Header">{port.projectName}</Heading>
                </Link>
              </Media.Item>
              <Media.Item>
                <section className="social-media">
                  <h5>
                    <a href={port.projectGithub}>github</a>
                  </h5>
                </section>
              </Media.Item>
            </Media>
            <Content>
              <p>{port.summary}</p>
              <h4>Technology Used</h4>
              <p>{port.technology}</p>
            </Content>
          </Card.Content>
          <Link to={`/portfolio/${port._id}/edit`}>
            <button>EDIT</button>
          </Link>
        </Card>
      </div>
    ));
  };

  return portfolio ? Loaded() : <h1>Loading...</h1>;
}

export default Explore;
