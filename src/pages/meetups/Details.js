import React, { useState, useEffect } from 'react';
import { format, parseISO } from 'date-fns';
import ptBR from 'date-fns/esm/locale/pt-BR';
import PropTypes from 'prop-types';
import { Icon } from 'react-icons-kit';
import { arrowLeft2 } from 'react-icons-kit/icomoon/arrowLeft2';
import { location } from 'react-icons-kit/icomoon/location';
import { calendar } from 'react-icons-kit/icomoon/calendar';
import { pencil } from 'react-icons-kit/icomoon/pencil';
import { bin } from 'react-icons-kit/icomoon/bin';
import NavBar from 'components/NavBar';
import api from 'api';
import Spinner from 'components/Spinner';
import { toast } from 'react-toastify';
import history from 'services/history';
import {
  Wrapper,
  Container,
  PageHeader,
  ButtonsLeft,
  ButtonsRight,
  EditButton,
  CancelButton,
  BackButton,
  PictureSection,
  DescriptionSection,
  DetailsSection,
  LoadingContainer,
} from './styles';

const MeetupsDetails = ({ match: { params } }) => {
  const [meetup, setMeetup] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get(`/meetups/${params.id}`).then(({ data }) => {
      setMeetup({
        ...data,
        dateFormated: format(
          parseISO(data.date),
          "dd ' de 'LLLL', às ' HH'h'",
          { locale: ptBR }
        ),
      });
      setLoading(false);
    });
  }, [params.id]);

  async function cancelMeetup() {
    setLoading(true);

    try {
      await api.delete(`/meetups/${params.id}`);

      toast.success('Meetup cancelado');
      history.push('/meus-meetups');
    } catch (error) {
      const errorMsg = error.response
        ? error.response.data.error
        : 'Houve um problema, por favor revise os dados e tente novamente.';

      toast.error(errorMsg);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Wrapper>
      <NavBar />
      <Container>
        <PageHeader>
          {/* ButtonsLeft */}
          <ButtonsLeft>
            <BackButton to="/meus-meetups">
              <Icon icon={arrowLeft2} />
            </BackButton>
            <h2 className="title">{meetup && meetup.title}</h2>
          </ButtonsLeft>
          {/* ButtonsRight */}
          <ButtonsRight>
            <EditButton
              to={{
                pathname: meetup ? `/meetups/${meetup.id}/editar` : '#',
                state: meetup,
              }}
            >
              <Icon className="icon" icon={pencil} size={12} /> Editar
            </EditButton>
            <CancelButton onClick={cancelMeetup}>
              <Icon className="icon" icon={bin} size={12} /> Cancelar
            </CancelButton>
          </ButtonsRight>
        </PageHeader>
        {meetup && (
          <>
            {/* Picture section */}
            <PictureSection>
              <picture>
                <source srcSet={meetup.banner.url} media="(max-width: 600px)" />
                <img src={meetup.banner.url} alt={meetup.title} />
              </picture>
            </PictureSection>

            {/* Description Section */}
            <DescriptionSection>
              <p>{meetup.description}</p>
            </DescriptionSection>

            {/* Details Section */}
            <DetailsSection>
              <div className="date">
                <Icon icon={calendar} size={13} /> {meetup.dateFormated}
              </div>

              <div className="local">
                <Icon icon={location} size={13} /> {meetup.localization}
              </div>
            </DetailsSection>
          </>
        )}
        {loading && (
          <LoadingContainer>
            <Spinner style={{ color: '#fff', width: '40px', height: '40px' }} />
          </LoadingContainer>
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
