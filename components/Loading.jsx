import React from 'react';
import {ActivityIndicator, Result} from '@ant-design/react-native';
import {history} from 'umi';

const Loading = ({error, isLoading}) => {
  if (error instanceof Error) {
    return (
      <Result
        title="Loading failed"
        message={error.message}
        buttonText="back"
        buttonType="warning"
        onButtonClick={() => history.goBack()}
      />
    );
  }

  return (
    <ActivityIndicator
      animating={isLoading}
      toast
      size="large"
      text="Loading"
    />
  );
}

export default Loading;
