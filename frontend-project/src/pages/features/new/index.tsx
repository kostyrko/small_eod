import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Button, Col, Card, Form, Input, Row, Space } from 'antd';
import { connect } from 'dva';
import React, { useEffect, FC } from 'react';
import { formatMessage, FormattedMessage } from 'umi-plugin-react/locale';

import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

interface TagNewFormProps {
  name: String;
  dispatch: Function;
}

// const layout = {
//   labelCol: { span: 8 },
//   wrapperCol: { span: 16 },
// };

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const FeatureNewForm: FC<TagNewFormProps> = () => {
  const [form] = Form.useForm();

  const onSubmit = () => {
    form.submit();
  };
  useEffect(() => {}, []);

  const onFinish = values => {
    console.log('Received values of form:', values);
  };

  // console.log(form)

  return (
    <Form form={form} onFinish={onFinish}>
      <PageHeaderWrapper content={formatMessage({ id: 'feature-new.page-header-content' })}>
        <Card bordered={false}>
          <Row>
            <Col span={16}>
              <Form.Item
                label={formatMessage({ id: 'feature-new.form.name.label' })}
                name="name"
                rules={[
                  {
                    required: true,
                    message: formatMessage({ id: 'feature-new.form.name.required-error' }),
                  },
                ]}
              >
                <Input placeholder={formatMessage({ id: 'feature-new.form.name.placeholder' })} />
              </Form.Item>
            </Col>
          </Row>

          <Row>
            <Col span={16}>
              <Form.List name="featureOptions">
                {(fields, { add, remove }) => (
                  <>
                    {fields.map(field => (
                      <Space key={field.key} style={{ marginBottom: 8 }} align="baseline">
                        <Form.Item
                          {...field}
                          label="Opcja cechy"
                          name={[field.name, 'fieldOption']}
                          // fieldKey={[field.fieldKey, 'fieldOption']}
                          rules={[{ required: true, message: 'Opcja cechy jest wymagana' }]}
                        >
                          <Input placeholder="Opcja cechy" />
                        </Form.Item>
                        <MinusCircleOutlined onClick={() => remove(field.name)} />
                      </Space>
                    ))}

                    <Form.Item label="Opcja cechy">
                      <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                        Dodaj opcję cechy
                      </Button>
                    </Form.Item>
                  </>
                )}
              </Form.List>
            </Col>
          </Row>

          <Row>
            <Col span={16}>
              <Form.Item {...tailLayout}>
                <Button type="primary" onClick={onSubmit}>
                  <FormattedMessage id="feature-new.form.save.label" />
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Card>
      </PageHeaderWrapper>
    </Form>
  );
};

export default connect(() => ({}))(FeatureNewForm);
