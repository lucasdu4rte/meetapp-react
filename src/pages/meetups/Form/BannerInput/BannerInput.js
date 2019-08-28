import React, { useState, useRef, useEffect } from 'react';
import { useField } from '@rocketseat/unform';
import api from 'api';
import { Icon } from 'react-icons-kit';
import { camera } from 'react-icons-kit/icomoon/camera';
import { toast } from 'react-toastify';

import { Container } from './styles';

export default function BannerInput() {
  const { defaultValue, registerField } = useField('banner');
  const { defaultValue: banner_id, error: errorBannerId } = useField(
    'banner_id'
  );

  const [file, setFile] = useState(banner_id);
  const [preview, setPreview] = useState(defaultValue && defaultValue.url);

  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: 'banner_id',
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
        <label htmlFor="banner">
          {preview ? (
            <img src={preview} alt="" />
          ) : (
            <>
              <Icon className="icon" size={30} icon={camera} />

              <p>Selecionar imagem</p>
            </>
          )}

          <input
            ref={ref}
            id="banner"
            type="file"
            data-file={file}
            accept="image/*"
            onChange={handleChange}
          />
        </label>
      </Container>
      {errorBannerId && <span>{errorBannerId}</span>}
    </>
  );
}
