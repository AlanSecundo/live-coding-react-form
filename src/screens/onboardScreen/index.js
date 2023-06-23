import { Button, Col, Row, notification } from "antd";
import styles from "./styles.module.css";
import { useForm } from "react-hook-form";
import TextInput from "../../components/inputs/TextInput";
import { validateCpf } from "../../utils/cpfValidation";
import { isNumeric } from "../../utils/numericValidation";
import { validateConfirmPassword } from "../../utils/passwordValidation";
import Checkbox from "../../components/inputs/Checkbox";
import DatePicker from "../../components/inputs/DatePicker";
import { useCreateUser } from "../../services/onboard/useCreateUser";
import { useNavigate } from "react-router-dom";

const DEFAULT_GUTTER = 24;

const OnboardScreen = () => {
  const [api, contextHolder] = notification.useNotification();
  
  const { handleSubmit, control } = useForm();
  const { createUser, isLoading } = useCreateUser();
  
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      await createUser(data);
      navigate("/list");
    } catch (error) {
      console.log(error)
      api.error({
        message: "Erro ao cadastrar usuário!",
        description:
          "Ocorreu um erro durante o cadastro do usuário informado, por favor, tente novamente mais tarde.",
      });
    }
  };

  return (
    <Row gutter={[DEFAULT_GUTTER]} className={styles.container}>
      {contextHolder}
      <Col span={10} offset={7}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Row gutter={[DEFAULT_GUTTER, DEFAULT_GUTTER]}>
            <Col span={24}>
              <h2>Cadastro de Pessoa Física</h2>
            </Col>
            <Col span={12}>
              <TextInput
                control={control}
                name="name"
                placeholder="Nome completo"
                required
              />
            </Col>
            <Col span={12}>
              <TextInput
                control={control}
                name="nationalRegistration"
                placeholder="CPF"
                required
                validate={validateCpf}
              />
            </Col>
            <Col span={12}>
              <DatePicker control={control} name="birthDate" />
            </Col>
            <Col span={12}>
              <TextInput
                control={control}
                name="rg"
                placeholder="Número do RG"
                required
                validate={isNumeric}
              />
            </Col>
            <Col span={12}>
              <TextInput
                control={control}
                name="issuingAuthority"
                placeholder="Orgão Emissor"
                required
              />
            </Col>
            <Col span={24}>
              <span>
                Informe o nome da mãe da mesma forma que consta na Receita
                Federal.
              </span>
            </Col>
            <Col span={24}>
              <TextInput
                control={control}
                name="mothersName"
                placeholder="Nome completo da mãe"
                required
              />
            </Col>
            <Col span={24}>
              <TextInput
                control={control}
                name="fathersName"
                placeholder="Nome completo do pai"
                required
              />
            </Col>
            <Col span={12}>
              <TextInput
                control={control}
                name="email"
                placeholder="Email"
                required
              />
            </Col>
            <Col span={12}>
              <TextInput
                control={control}
                name="confirmEmail"
                placeholder="Confirmação de email"
                required
              />
            </Col>
            <Col span={8}>
              <TextInput
                control={control}
                name="areaCode"
                placeholder="DDD"
                required
              />
            </Col>
            <Col span={16}>
              <TextInput
                control={control}
                name="cellPhone"
                placeholder="Celular"
                required
              />
            </Col>
            <Col span={24}>
              <TextInput
                control={control}
                name="income"
                placeholder="Renda mensal"
                required
              />
            </Col>

            <Col span={24}>
              <span>
                A senha deve conter ao menos uma letra minúscula, uma maiúscula
                e um número.
              </span>
            </Col>

            <Col span={12}>
              <TextInput
                control={control}
                name="password"
                placeholder="Senha"
                required
                type="password"
              />
            </Col>
            <Col span={12}>
              <TextInput
                control={control}
                name="confirmPassword"
                placeholder="Confirmar Senha"
                required
                type="password"
                validate={(confirmPassword, form) =>
                  validateConfirmPassword(form.password, confirmPassword)
                }
              />
            </Col>

            <Col span={24}>
              <span>
                Assinale o campo abaixo se você é uma Pessoa Politicamente
                Exposta (PPE).
              </span>
            </Col>
            <Col span={24}>
              <Checkbox control={control} name="isPPE" placeholder="Sou PPE" />
            </Col>

            <Col span={24}>
              <Button
                block
                type="primary"
                htmlType="submit"
                loading={isLoading}
              >
                Continuar
              </Button>
            </Col>
          </Row>
        </form>
      </Col>
    </Row>
  );
};

export default OnboardScreen;
