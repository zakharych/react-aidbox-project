import { useForm } from "@mantine/form";
import {
  TextInput,
  PasswordInput,
  Paper,
  Group,
  PaperProps,
  Button,
  Stack,
  Container,
} from "@mantine/core";
import { useSignIn } from "./hooks";

export function SignIn(props: PaperProps) {
  const { onFinish } = useSignIn();
  const form = useForm({
    initialValues: {
      email: "test@gmail.com",
      name: "",
      password: "password",
      terms: true,
    },

    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
      password: (val) =>
        val.length <= 6
          ? "Password should include at least 6 characters"
          : null,
    },
  });

  return (
    <Container size={420} my={40}>
      <Paper radius="md" p="xl" withBorder {...props}>
        <form onSubmit={form.onSubmit(onFinish)}>
          <Stack>
            <TextInput
              required
              label="Email"
              placeholder="hello@mantine.dev"
              value={form.values.email}
              onChange={(event) =>
                form.setFieldValue("email", event.currentTarget.value)
              }
              error={form.errors.email && "Invalid email"}
            />

            <PasswordInput
              required
              label="Password"
              placeholder="Your password"
              value={form.values.password}
              onChange={(event) =>
                form.setFieldValue("password", event.currentTarget.value)
              }
              error={
                form.errors.password &&
                "Password should include at least 6 characters"
              }
            />
          </Stack>

          <Group position="apart" mt="xl">
            <Button type="submit">Log in</Button>
          </Group>
        </form>
      </Paper>
    </Container>
  );
}
