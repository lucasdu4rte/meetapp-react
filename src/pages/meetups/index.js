import React, { useState, useEffect } from 'react';
import NavBar from 'components/NavBar';
import api from 'api';
import { useSelector } from 'react-redux';

import moment from 'moment';
import 'moment/locale/pt-br';
import {
  Wrapper,
  Container,
  PageHeader,
  PrimaryButton,
  List,
  ListItem,
  ListItemExtra,
} from './styles';

moment.locale('pt-br');

const Meetups = () => {
  const user = useSelector(state => state.user.profile);
  const [meetups, setMeetups] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // api.get('/meetups?date=2019-08-13').then(({ data }) => {
    //   setMeetups(
    //     data
    //   );
    //   setLoading(false);
    // });
  }, []);

  return (
    <Wrapper>
      <NavBar user={user} />
      <Container>
        <PageHeader>
          <h1 className="title">Meus meetups</h1>
          <PrimaryButton>+ Novo meetup</PrimaryButton>
        </PageHeader>
        <List>
          <ListItem>
            <span className="title">Meetup 1</span>
            <ListItemExtra>
              <span>30 de Agosto, às 22h</span>
              <span className="icon">{`>`}</span>
            </ListItemExtra>
          </ListItem>
          <ListItem>
            <span className="title">Meetup 1</span>
            <ListItemExtra>
              <span>30 de Agosto, às 22h</span>
              <span className="icon">{`>`}</span>
            </ListItemExtra>
          </ListItem>
          <ListItem>
            <span className="title">Meetup 1</span>
            <ListItemExtra>
              <span>30 de Agosto, às 22h</span>
              <span className="icon">{`>`}</span>
            </ListItemExtra>
          </ListItem>
        </List>
      </Container>
    </Wrapper>
  );
};

export default Meetups;
