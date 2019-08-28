import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { Icon } from 'react-icons-kit';
import { arrowLeft2 } from 'react-icons-kit/icomoon/arrowLeft2';
import { checkmark } from 'react-icons-kit/icomoon/checkmark';
import { toast } from 'react-toastify';

import api from 'api';
import NavBar from 'components/NavBar';
import Spinner from 'components/Spinner';

import {
  Wrapper,
  Container,
  PageHeader,
  ButtonsLeft,
  ButtonsRight,
  SaveButton,
  BackButton,
  StyledForm,
  StyledInput,
} from './styles';
import BannerInput from './BannerInput/BannerInput';
import Datepicker from './Datepicker';

const schema = Yup.object().shape({
  banner_id: Yup.string().required('Por favor, selecione uma imagem.'),
  title: Yup.string()
    .min(5, 'Digite no minímo 6 caracteres.')
    .required('Por favor, digite o titulo do meetup.'),
  description: Yup.string().required(
    'Por favor, digite uma descrição do meetup.'
  ),
  date: Yup.date('Selecione uma data válida').required(
    'Por favor, selecione uma data para o meetup.'
  ),
  localization: Yup.string().required(
    'Por favor, digite a localização do meetup.'
  ),
});

const MeetupsDetails = ({ location: { state: meetupData } }) => {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(data) {
    setLoading(true);

    try {
      await api.postOrPut('/meetups', meetupData && meetupData.id, {
        ...data,
      });

      toast.success('Meetup salvo com sucesso!');
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
          <ButtonsLeft>
            <BackButton to="/meus-meetups">
              <Icon icon={arrowLeft2} />
            </BackButton>
            <h2 className="title">Formulário de Meetup</h2>
          </ButtonsLeft>
        </PageHeader>

        <StyledForm
          schema={schema}
          initialData={meetupData}
          onSubmit={handleSubmit}
        >
          <BannerInput name="banner_id" />
          <StyledInput
            name="title"
            autoComplete="off"
            placeholder="Título do meetup"
          />
          <StyledInput
            multiline
            name="description"
            placeholder="Descrição completa"
          />

          <Datepicker name="date" placeholder="Data do meetup" />

          <StyledInput name="localization" placeholder="Localização" />

          <ButtonsRight>
            <SaveButton type="submit">
              {loading ? (
                <Spinner
                  style={{
                    margin: '0 5px 0 0',
                    color: '#fff',
                    width: '15px',
                    height: '15px',
                  }}
                />
              ) : (
                <Icon className="icon" icon={checkmark} size={12} />
              )}{' '}
              Salvar
            </SaveButton>
          </ButtonsRight>
        </StyledForm>
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
  location: PropTypes.shape({
    state: PropTypes.shape({
      id: PropTypes.number,
    }),
  }).isRequired,
};

export default MeetupsDetails;
