"use client";
import React from 'react';
import { Button, ConfigProvider } from 'antd';
import Forms from '@/components/Forms';
import Tables from '@/components/Tables';
import Stat1 from '@/components/Stat1';
import Stat2 from '@/components/Stat2';

import theme from './theme/themeConfig';

const HomePage = () => (
  <ConfigProvider theme={theme}>
    <Forms />
    <Tables />
    <Stat1 />
    <br/>
    <Stat2 />
  </ConfigProvider>
);

export default HomePage;