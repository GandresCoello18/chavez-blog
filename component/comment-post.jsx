import React, { useState } from "react";
import { Form, Col, InputGroup, Button } from "react-bootstrap";

const CommentPost = () => {

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        }

        setValidated(true);
    };

    return(
        <>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Row>
                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                        <Form.Label>Nombre:</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Escribe el usuario con el que deseas aparecer"
                            defaultValue="anonimo"
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                        <Form.Label>Sitio web (opcional)</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="www.mi-sitio.com"
                            defaultValue="ninguno"
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                        <Form.Label>Email</Form.Label>
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                            </InputGroup.Prepend>
                            <Form.Control
                                type="email"
                                placeholder="direccion de correo"
                                aria-describedby="inputGroupPrepend"
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Please choose a email.
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Label>Tu comentario</Form.Label>
                    <Form.Control as="textarea" rows="3" />
                </Form.Row>
                <Button type="submit" className="mt-3">Comentar</Button>
            </Form>
        </>
    );
}

export default CommentPost;