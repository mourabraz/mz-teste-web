import React, { createContext, useCallback, useState, useContext } from 'react';

interface ErrorContextData {
  visible: boolean;
  title: string;
  messages: string[];
  setVisible(visible: boolean): void;
  setTitle(title: string): void;
  setMessages(messages: string[]): void;
  clear(): void;
}

const ErrorContext = createContext<ErrorContextData>({} as ErrorContextData);

const ErrorProvider: React.FC = ({ children }) => {
  const [visible, setVisible] = useState<boolean>(false);
  const [title, setTitle] = useState<string>('');
  const [messages, setMessages] = useState<string[]>([]);

  const clear = useCallback(() => {
    setVisible(false);
    setTitle('');
    setMessages([]);
  }, []);

  return (
    <ErrorContext.Provider
      value={{
        visible,
        title,
        messages,
        setVisible,
        setTitle,
        setMessages,
        clear,
      }}
    >
      {children}
    </ErrorContext.Provider>
  );
};

function useError(): ErrorContextData {
  const context = useContext(ErrorContext);

  if (!context) {
    throw new Error('useError must be within an ErrorProvider');
  }

  return context;
}

export { ErrorProvider, useError };
