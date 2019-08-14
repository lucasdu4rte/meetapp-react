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
    api.get('/my-meetups').then(({ data }) => {
      setMeetups(data);
      setLoading(false);
    });
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
          {meetups.map(meetup => (
            <ListItem key={meetup.id} to={`/meetups/${meetup.id}`}>
              <span className="title">{meetup.title}</span>
              <ListItemExtra>
                <span>{meetup.date}</span>
                <span className="icon">{`>`}</span>
              </ListItemExtra>
            </ListItem>
          ))}
        </List>
      </Container>
    </Wrapper>
  );
};

export default Meetups;
