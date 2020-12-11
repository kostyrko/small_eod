import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Button, Col, Card, Form, Input, Row } from 'antd';
import { connect } from 'dva';
import React, { useEffect, FC, useState } from 'react';
import { formatMessage, FormattedMessage } from 'umi-plugin-react/locale';

import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

interface FeatureNewFormProps {
  name: string;
  featureoptions: string[];
  dispatch: Function;
}

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const FeatureNewForm: FC<FeatureNewFormProps> = () => {
  const [form] = Form.useForm();

  const [formDisable, setFormDisable] = useState(true);

  const onSubmit = () => {
    form.submit();
  };
  useEffect(() => {}, []);

  const onFinish = values => {
    console.log('Received values of form:', values);
  };

  const onAddOption = () => {
    setFormDisable(false);
  };

  // console.log(form)

  return (
    <Form form={form} onFinish={onFinish} {...layout}>
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
              <Form.List name="featureoption">
                {(fields, { add, remove }) => (
                  <>
                    {fields.map(field => (
                      <Form.Item
                        label={formatMessage({ id: 'feature-new.form.featureoption.label' })}
                        required
                        key={field.key}
                      >
                        <Form.Item
                          {...field}
                          validateTrigger={['onChange', 'onBlur']}
                          rules={[
                            {
                              required: true,
                              whitespace: true,
                              message: formatMessage({
                                id: 'feature-new.form.featureoption.required-error',
                              }),
                            },
                          ]}
                          noStyle
                        >
                          <Input
                            placeholder={formatMessage({
                              id: 'feature-new.form.featureoption.placeholder',
                            })}
                            style={{ width: '100%' }}
                          />
                        </Form.Item>
                        {fields.length > 1 ? (
                          <MinusCircleOutlined
                            className="dynamic-delete-button"
                            onClick={() => remove(field.name)}
                          />
                        ) : null}
                      </Form.Item>
                    ))}
                    <Form.Item {...tailLayout}>
                      <Button
                        type="dashed"
                        onClick={() => {
                          add();
                          onAddOption();
                        }}
                        style={formDisable ? { width: '100%', color: 'red' } : { width: '100%' }}
                        icon={<PlusOutlined />}
                      >
                        {formatMessage({ id: 'feature-new.form.featureoption.button' })}
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
                <Button type="primary" onClick={onSubmit} disabled={formDisable}>
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
