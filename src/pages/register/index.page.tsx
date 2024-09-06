import { Button, Heading, MultiStep, Text, TextInput } from "@ignite-ui/react";
import { Container, Form, Header } from "./styles";
import { ArrowRight } from "phosphor-react";

export default function Register() {
    return (
        <Container>
            <Header>
                <Heading as="strong">Bem-vindo ao Ignite Call!</Heading>
                <Text>
                    Precisamos de algumas informações para criar seu perfil! Ah, você pode editar essas informações depois.
                </Text>

                <MultiStep size={4} currentStep={1} />
            </Header>

            <Form as="form">
                <label>
                    <Text size="sm">Nome de usuário</Text>
                    <TextInput placeholder="seu-usuário" prefix="ignite.com/" crossOrigin={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />
                </label>

                <label>
                    <Text size="sm">Nome completo</Text>
                    <TextInput placeholder="Seu nome" crossOrigin={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />
                </label>

                <Button>
                    Próximo passo
                    <ArrowRight />
                </Button>
            </Form>
        </Container>
    )
}