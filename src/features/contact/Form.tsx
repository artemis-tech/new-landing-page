import React from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  selectContactStatus,
  reset,
  sendMessageAsync,
  initialState,
} from './contactSlice';
import {
  Box,
  Button,
  Form as GrommetForm,
  MaskedInput,
  Spinner,
  TextArea,
  TextInput,
} from 'grommet';
import { useState } from 'react';

function Form() {
  const [value, setValue] = useState(initialState);
  const contactStatus = useAppSelector(selectContactStatus);
  const dispatch = useAppDispatch();

  return (
    <GrommetForm
      name="contact"
      value={value}
      onReset={() => reset()}
      onChange={(nextValue, { touched }) => {
        console.log('Change', nextValue, touched);
        setValue(nextValue);
      }}
      onSubmit={(event) => {
        console.log('Submit', event.value, event.touched);
        dispatch(sendMessageAsync(event.value.message));
      }}
    >
      <Box gap="medium">
        <TextInput form="contact" name="name" placeholder={'Name'} />
        <MaskedInput
          form="contact"
          placeholder="Email"
          name="email"
          type="email"
        />
        <TextArea
          style={{
            minHeight: '150px',
          }}
          form="contact"
          placeholder="Message"
          name="message"
        />
      </Box>
      <Box direction="row" justify="end" margin={{ top: 'medium' }}>
        <Button
          type="submit"
          label={
            contactStatus !== 'loading' ? 'Submit' : <Spinner color="white" />
          }
          primary
        />
      </Box>
    </GrommetForm>
  );
}

export default Form;
