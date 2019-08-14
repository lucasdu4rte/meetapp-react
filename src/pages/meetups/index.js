import React, { useState, useEffect } from 'react';
import NavBar from 'components/NavBar';
import api from 'api';
import { useSelector } from 'react-redux';

import moment from 'moment';
import 'moment/locale/pt-br';
import { Wrapper } from './styles';

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
      <div className="container mb-2">
        <div className="columns">
          <div className="column col-8 col-mx-auto p-2 mt-2">
            <strong>Meus meetups</strong>
            <br />

            {loading && 'Carregando...'}

            {meetups.map(meetup => (
              <div
                key={meetup.id}
                className="card mt-2"
                style={{
                  border: 0,
                  boxShadow: '0 0.25rem 1rem rgba(48,55,66,.15)',
                }}
              >
                <div className="card-header">
                  <div className="card-title h6">
                    Pedido <strong>#{meetup.id}</strong> - {meetup.user.name}
                  </div>
                  {/* há 2 segundos */}
                  <small className="card-subtitle text-gray">
                    {meetup.meetupDateFormated}
                  </small>{' '}
                  <br />
                  <strong className="card-subtitle text-dark">
                    {meetup.totalFormated}
                  </strong>
                </div>

                <div className="card-body">
                  <div className="divider" />
                  <div className="columns">
                    {meetup.products.map(product => (
                      <div key={product.id} className="column col-4">
                        <div
                          className="tile p-2"
                          style={{ border: '1px solid #f1f2f6' }}
                        >
                          <div className="tile-icon">
                            <div className="">
                              {/* <i className="icon icon-file centered" /> */}
                              <img
                                className="centered"
                                src={product.photo_url}
                                alt={product.description}
                                width={60}
                              />
                            </div>
                          </div>
                          <div className="tile-content">
                            <div className="tile-title">
                              {product.description}
                            </div>
                            <small className="tile-subtitle">
                              Tamanho: {product.size.description}
                            </small>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="divider" />
                </div>

                <div className="card-footer">
                  <strong>Observações: </strong>
                  {meetup.observation}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Meetups;
