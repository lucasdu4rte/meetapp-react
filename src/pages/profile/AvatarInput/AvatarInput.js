import React, { useState, useRef, useEffect } from 'react';
import { useField } from '@rocketseat/unform';
import api from 'api';
import { toast } from 'react-toastify';

import { Container } from './styles';

export default function AvatarInput() {
  const { defaultValue, registerField } = useField('avatar');
  const { defaultValue: avatar_id, error: errorAvatarId } = useField(
    'avatar_id'
  );

  const [file, setFile] = useState(avatar_id);
  const [preview, setPreview] = useState(defaultValue && defaultValue.url);

  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: 'avatar_id',
        ref: ref.current,
        path: 'dataset.file',
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handleChange(event) {
    const data = new FormData();

    data.append('file', event.target.files[0]);

    try {
      const response = await api.post('files', data);

      const { id, url } = response.data;

      setFile(id);
      setPreview(url);
    } catch (error) {
      toast.error('Algo deu errado ao enviar a imagem, tente novamente!');
    }
  }

  return (
    <>
      <Container>
        <label htmlFor="avatar">
          <img
            src={
              preview ||
              'https://api.adorable.io/avatars/120/lucasdu4rte@gmail.com.png'
            }
            alt=""
          />

          <input
            ref={ref}
            id="avatar"
            type="file"
            data-file={file}
            accept="image/*"
            onChange={handleChange}
          />
        </label>
      </Container>
      {errorAvatarId && <span>{errorAvatarId}</span>}
    </>
  );
}
