import React, { useState } from 'react';
import { Form, Button, Select, DatePicker, Space } from 'antd';
import {
  VEGETABLES,
  FRUITS,
  BREADS,
  PASTRIES,
  CONDIMENTS,
  CURDS,
  HERBS,
  SPICES,
  MIXTURES,
  COCKTAILS,
  TEAS,
  ALCOHOL,
  MEAT,
} from '../helpers/CONSTANTS';
const { Option } = Select;

const Alimentatie = () => {
  const [form] = Form.useForm();
  const [type, setType] = useState('');
  const [startdate, setStartdate] = useState(null);
  const [enddate, setEnddate] = useState(null);
  const listTypes = [
    'VEGETABLES',
    'FRUITS',
    'BREADS',
    'PASTRIES',
    'CONDIMENTS',
    'CURDS',
    'HERBS',
    'SPICES',
    'MIXTURES',
    'COCKTAILS',
    'TEAS',
    'ALCOHOL',
    'MEAT',
  ];
  const formLayout = 'horizontal';
  const formItemLayout =
    formLayout === 'horizontal'
      ? {
          labelCol: {
            span: 4,
          },
          wrapperCol: {
            span: 14,
          },
        }
      : null;
  const buttonItemLayout =
    formLayout === 'horizontal'
      ? {
          wrapperCol: {
            span: 14,
            offset: 4,
          },
        }
      : null;
  const children = [];

  for (let i = 0; i < listTypes.length; i++) {
    children.push(<Option key={listTypes[i]}>{listTypes[i]}</Option>);
  }
  let typeChildren = [];
  const handleChangeType = (value) => {
    switch (value) {
      case 'VEGETABLES':
        for (let i = 0; i < VEGETABLES.length; i++) {
          typeChildren.push(
            <Option key={VEGETABLES[i]}>{VEGETABLES[i]}</Option>,
          );
          console.log(typeChildren[5]);
        }
        break;
      case 'FRUITS':
        for (let i = 0; i < FRUITS.length; i++) {
          typeChildren.push(<Option key={FRUITS[i]}>{FRUITS[i]}</Option>);
        }
        break;
      case 'BREADS':
        for (let i = 0; i < BREADS.length; i++) {
          typeChildren.push(<Option key={BREADS[i]}>{BREADS[i]}</Option>);
        }
        break;
      case 'PASTRIES':
        for (let i = 0; i < PASTRIES.length; i++) {
          typeChildren.push(<Option key={PASTRIES[i]}>{PASTRIES[i]}</Option>);
        }
        break;
      case 'CONDIMENTS':
        for (let i = 0; i < CONDIMENTS.length; i++) {
          typeChildren.push(
            <Option key={CONDIMENTS[i]}>{CONDIMENTS[i]}</Option>,
          );
        }
        break;
      case 'CURDS':
        for (let i = 0; i < CURDS.length; i++) {
          typeChildren.push(<Option key={CURDS[i]}>{CURDS[i]}</Option>);
        }
        break;
      case 'HERBS':
        for (let i = 0; i < HERBS.length; i++) {
          typeChildren.push(<Option key={HERBS[i]}>{HERBS[i]}</Option>);
        }
        break;
      case 'SPICES':
        for (let i = 0; i < SPICES.length; i++) {
          typeChildren.push(<Option key={SPICES[i]}>{SPICES[i]}</Option>);
        }
        break;
      case 'MIXTURES':
        for (let i = 0; i < MIXTURES.length; i++) {
          typeChildren.push(<Option key={MIXTURES[i]}>{MIXTURES[i]}</Option>);
        }
        break;
      case 'COCKTAILS':
        for (let i = 0; i < COCKTAILS.length; i++) {
          typeChildren.push(<Option key={COCKTAILS[i]}>{COCKTAILS[i]}</Option>);
        }
        break;
      case 'TEAS':
        for (let i = 0; i < TEAS.length; i++) {
          typeChildren.push(<Option key={TEAS[i]}>{TEAS[i]}</Option>);
        }
        break;
      case 'ALCOHOL':
        for (let i = 0; i < ALCOHOL.length; i++) {
          typeChildren.push(<Option key={ALCOHOL[i]}>{ALCOHOL[i]}</Option>);
        }
        break;
      case 'MEAT':
        for (let i = 0; i < MEAT.length; i++) {
          typeChildren.push(<Option key={MEAT[i]}>{MEAT[i]}</Option>);
        }
        break;
      default:
        typeChildren.push(<Option key={0}>Null</Option>);
    }
  };
  const handleChangeStartDate = (value) => {
    setStartdate(value);
  };
  const handleClickSubmit = () => {};
  return (
    <Form
      {...formItemLayout}
      layout={formLayout}
      form={form}
      initialValues={{
        layout: formLayout,
      }}>
      <Form.Item label='Tip Aliment'>
        <Select
          style={{ width: '100%' }}
          showSearch
          onChange={handleChangeType}>
          {children}
        </Select>
      </Form.Item>
      <Form.Item label='Aliment'>
        <Select
          style={{ width: '100%' }}
          showSearch
          onChange={handleChangeType}>
          {typeChildren}
        </Select>
      </Form.Item>
      <Form.Item label='Data Si Ora'>
        <Space direction='horizontal'>
          <DatePicker
            placeholder='Select Start Date'
            value={startdate}
            onChange={handleChangeStartDate}
          />
        </Space>
      </Form.Item>
      <Form.Item {...buttonItemLayout}>
        <Button type='primary' onClick={handleClickSubmit}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
export default Alimentatie;
