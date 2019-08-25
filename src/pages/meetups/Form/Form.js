import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import * as Yup from 'yup';
import { format, parseISO, addHours } from 'date-fns';
// import ptBR from 'date-fns/esm/locale/pt-BR';
import PropTypes from 'prop-types';
import { Icon } from 'react-icons-kit';
import { arrowLeft2 } from 'react-icons-kit/icomoon/arrowLeft2';
import { checkmark } from 'react-icons-kit/icomoon/checkmark';
// import { bin } from 'react-icons-kit/icomoon/bin';

import NavBar from 'components/NavBar';
// import api from 'api';
// import Spinner from 'components/Spinner';

import {
  Wrapper,
  Container,
  PageHeader,
  ButtonsLeft,
  ButtonsRight,
  SaveButton,
  // CancelButton,
  BackButton,
  // PictureSection,
  // DescriptionSection,
  // DetailsSection,
  // LoadingContainer,
  StyledForm,
  StyledInput,
} from './styles';
import InputFilePreview from './InputFilePreview/InputFilePreview';
import Datepicker from './Datepicker';

const schema = Yup.object().shape({
  banner_id: Yup.number().required('Por favor, selecione uma imagem.'),
  title: Yup.string().required('Por favor, digite o titulo do meetup.'),
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

const MeetupsDetails = ({
  // match: { params },
  location: { state: meetupData },
}) => {
  console.log('meetupData', meetupData);
  const user = useSelector(state => state.user.profile);

  const handleSubmit = data => {
    // const [loading, setLoading] = useState(false);
    console.log('data', data);
  };

  return (
    <Wrapper>
      <NavBar user={user} />
      <Container>
        <PageHeader>
          <ButtonsLeft>
            <BackButton to="/meus-meetups">
              <Icon icon={arrowLeft2} />
            </BackButton>
            <h2 className="title">Formulário de Meetup</h2>
          </ButtonsLeft>

          {/* <ButtonsRight>
            <SaveButton disabled={meetup}>
              <Icon className="icon" icon={checkmark} size={12} /> Editar
            </SaveButton>
            <CancelButton disabled={meetup}>
              <Icon className="icon" icon={bin} size={12} /> Cancelar
            </CancelButton>
          </ButtonsRight> */}
        </PageHeader>
        <StyledForm
          onSubmit={handleSubmit}
          schema={schema}
          initialData={meetupData}
        >
          <InputFilePreview name="banner_id" />
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
          {/* <StyledInput name="date" placeholder="Data do meetup" /> */}

          <Datepicker
            name="date"
            locale="pt-BR"
            options={{
              enableTime: true,
              dateFormat: 'd/m/Y H:i',
              minDate: addHours(new Date(), 12),
              time_24hr: true,
            }}
            placeholder="Data do meetup"
          />

          <StyledInput name="localization" placeholder="Localização" />
          <ButtonsRight>
            {/* <CancelButton>
              <Icon className="icon" icon={bin} size={12} /> Voltar
            </CancelButton> */}
            <SaveButton type="submit">
              <Icon className="icon" icon={checkmark} size={12} /> Salvar
            </SaveButton>
          </ButtonsRight>
        </StyledForm>
        {/* {loading && (
          <LoadingContainer>
            <Spinner style={{ color: '#fff', width: '40px', height: '40px' }} />
          </LoadingContainer>
        )} */}
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
