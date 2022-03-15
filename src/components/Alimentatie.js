import React, { useState, useEffect } from 'react';
import {
  Form,
  Button,
  Select,
  DatePicker,
  Space,
  Input,
  InputNumber,
} from 'antd';
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
  const [typeChildren, setTypeChildren] = useState([]);
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
  const capitalize = (string) => {
    string = string.toLowerCase();
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  const children = [];

  for (let i = 0; i < listTypes.length; i++) {
    children.push(
      <Option key={listTypes[i]}>{capitalize(listTypes[i])}</Option>,
    );
  }

  const handleChangeType = (value) => {
    switch (value) {
      case 'VEGETABLES':
        setType('VEGETABLES');
        break;
      case 'FRUITS':
        setType('FRUITS');
        break;
      case 'BREADS':
        setType('BREADS');
        break;
      case 'PASTRIES':
        setType('PASTRIES');
        break;
      case 'CONDIMENTS':
        setType('CONDIMENTS');
        break;
      case 'CURDS':
        setType('CURDS');
        break;
      case 'HERBS':
        setType('HERBS');
        break;
      case 'SPICES':
        setType('SPICES');
        break;
      case 'MIXTURES':
        setType('MIXTURES');
        break;
      case 'COCKTAILS':
        setType('COCKTAILS');
        break;
      case 'TEAS':
        setType('TEAS');
        break;
      case 'ALCOHOL':
        setType('ALCOHOL');
        break;
      case 'MEAT':
        setType('MEAT');
        break;
      default:
    }
  };
  useEffect(() => {
    const children = [];
    switch (type) {
      case 'VEGETABLES':
        for (let i = 0; i < VEGETABLES.length; i++) {
          children.push(
            <Option key={VEGETABLES[i]}>{capitalize(VEGETABLES[i])}</Option>,
          );
        }

        break;
      case 'FRUITS':
        for (let i = 0; i < FRUITS.length; i++) {
          children.push(
            <Option key={FRUITS[i]}>{capitalize(FRUITS[i])}</Option>,
          );
        }
        break;
      case 'BREADS':
        for (let i = 0; i < BREADS.length; i++) {
          children.push(
            <Option key={BREADS[i]}>{capitalize(BREADS[i])}</Option>,
          );
        }
        break;
      case 'PASTRIES':
        for (let i = 0; i < PASTRIES.length; i++) {
          children.push(
            <Option key={PASTRIES[i]}>{capitalize(PASTRIES[i])}</Option>,
          );
        }
        break;
      case 'CONDIMENTS':
        for (let i = 0; i < CONDIMENTS.length; i++) {
          children.push(
            <Option key={CONDIMENTS[i]}>{capitalize(CONDIMENTS[i])}</Option>,
          );
        }
        break;
      case 'CURDS':
        for (let i = 0; i < CURDS.length; i++) {
          children.push(<Option key={CURDS[i]}>{capitalize(CURDS[i])}</Option>);
        }
        break;
      case 'HERBS':
        for (let i = 0; i < HERBS.length; i++) {
          children.push(<Option key={HERBS[i]}>{capitalize(HERBS[i])}</Option>);
        }
        break;
      case 'SPICES':
        for (let i = 0; i < SPICES.length; i++) {
          children.push(
            <Option key={SPICES[i]}>{capitalize(SPICES[i])}</Option>,
          );
        }
        break;
      case 'MIXTURES':
        for (let i = 0; i < MIXTURES.length; i++) {
          children.push(
            <Option key={MIXTURES[i]}>{capitalize(MIXTURES[i])}</Option>,
          );
        }
        break;
      case 'COCKTAILS':
        for (let i = 0; i < COCKTAILS.length; i++) {
          children.push(
            <Option key={COCKTAILS[i]}>{capitalize(COCKTAILS[i])}</Option>,
          );
        }
        break;
      case 'TEAS':
        for (let i = 0; i < TEAS.length; i++) {
          children.push(<Option key={TEAS[i]}>{capitalize(TEAS[i])}</Option>);
        }
        break;
      case 'ALCOHOL':
        for (let i = 0; i < ALCOHOL.length; i++) {
          children.push(
            <Option key={ALCOHOL[i]}>{capitalize(ALCOHOL[i])}</Option>,
          );
        }
        break;
      case 'MEAT':
        for (let i = 0; i < MEAT.length; i++) {
          children.push(<Option key={MEAT[i]}>{capitalize(MEAT[i])}</Option>);
        }
        break;
      default:
        children.push(<Option key={0}>Please Select The Type First</Option>);
    }
    setTypeChildren(children);
  }, [type, setTypeChildren]);

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
        <Select style={{ width: '100%' }} showSearch>
          {typeChildren}
        </Select>
      </Form.Item>
      <Form.Item label='Data Si Ora'>
        <Space direction='horizontal'>
          <DatePicker
            showTime={{ format: 'HH:mm' }}
            placeholder='Select Start Date'
            value={startdate}
            onChange={handleChangeStartDate}
          />
        </Space>
      </Form.Item>
      <Form.Item label='Cantitate'>
        <InputNumber />
      </Form.Item>
      <Form.Item label='Gramaj'>
        <InputNumber />
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
