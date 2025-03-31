'use client';

import React from 'react';
import { FormattedMessage, MessageDescriptor } from 'react-intl';

type I18nMessageProps = MessageDescriptor & {
  values?: Record<string, React.ReactNode>;
  tagName?: React.ElementType<any>;
};

export default function I18nMessage({ ...props }: I18nMessageProps) {
  return <FormattedMessage {...props} />;
}
