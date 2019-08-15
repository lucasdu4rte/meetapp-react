import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { format, parseISO } from 'date-fns';
import ptBR from 'date-fns/esm/locale/pt-BR';
import PropTypes from 'prop-types';

import NavBar from 'components/NavBar';
import api from 'api';
import { Wrapper, Container, PageHeader, PrimaryButton } from './styles';

const MeetupsDetails = ({ match: { params } }) => {
  const user = useSelector(state => state.user.profile);
  const [meetup, setMeetup] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get(`/meetups/${params.id}`).then(({ data }) => {
      setMeetup({
        ...data,
        dateFormated: format(
          parseISO(data.date),
          "dd ' de ' LLLL ' às ' HH'h'",
          { locale: ptBR }
        ),
      });
      setLoading(false);
    });
  }, [params.id]);

  return (
    <Wrapper>
      <NavBar user={user} />
      <Container>
        {loading && 'Carregando...'}
        {meetup && (
          <>
            <PageHeader>
              {`<--`}
              <h1 className="title">{meetup.title}</h1>
              {/* ButtonsRight */}
              <div>
                <PrimaryButton> Editar</PrimaryButton>
                <PrimaryButton> Cancelar</PrimaryButton>
              </div>
            </PageHeader>
            {/* Picture section */}
            <div>
              <picture>
                <source srcSet={meetup.banner.url} media="(max-width: 600px)" />
                {/* <img src={meetup.banner.url} alt={meetup.title} /> */}
              </picture>
            </div>

            {/* Description Section */}
            <div>
              <p>{meetup.description}</p>
            </div>

            {/* Details Section */}
            <div>
              <div>{meetup.dateFormated}</div>

              <div>{meetup.localization}</div>
            </div>
          </>
        )}
      </Container>
    </Wrapper>
  );
};

MeetupsDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default MeetupsDetails;
