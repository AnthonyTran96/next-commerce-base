// components/I18nMessage.tsx
'use client';

import React from 'react';
import { FormattedMessage, MessageDescriptor } from 'react-intl';

type I18nMessageProps = MessageDescriptor & {
  values?: Record<string, React.ReactNode>; // optional variables to inject
};

export default function I18nMessage({ ...props }: I18nMessageProps) {
  return <FormattedMessage {...props} />;
}
