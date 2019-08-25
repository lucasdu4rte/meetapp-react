import React, { useState, useRef, useEffect } from 'react';
import { useField } from '@rocketseat/unform';
import api from 'api';
import { Icon } from 'react-icons-kit';
import { camera } from 'react-icons-kit/icomoon/camera';

import { Container } from './styles';

const InputFilePreview = () => {
  const { defaultValue, registerField, error } = useField('banner');
  const [file, setFile] = useState(defaultValue && defaultValue.id);
  const [preview, setPreview] = useState(defaultValue && defaultValue.url);
  const ref = useRef();

  useEffect(() => {
    if (!ref.current) {
      registerField({
        name: 'banner',
        ref: ref.current,
        path: 'dataset.file',
      });
    }
  }, [ref, registerField]);

  async function handleChange(event) {
    const data = new FormData();
    data.append('file', event.target.files[0]);

    const response = await api.post('files', data);

    const { id, url } = response.data;

    setFile(id);
    setPreview(url);
  }

  return (
    <>
      <Container>
        <label htmlFor="banner">
          {preview ? (
            <img src={preview} alt="banner" />
          ) : (
            <>
              <Icon className="icon" icon={camera} size={32} />
              <span>Selecionar imagem</span>
            </>
          )}

          <input
            type="file"
            id="banner"
            accept="image/*"
            data-file={file}
            onChange={handleChange}
            ref={ref}
          />
        </label>
      </Container>
      {error && <span>{error}</span>}
    </>
  );
};

export default InputFilePreview;
