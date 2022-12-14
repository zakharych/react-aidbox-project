import { Button, Container, Group } from "@mantine/core";
import { baseLogout } from "../../services/auth";

export default function MainLayout() {
  return (
    <Container size={420} my={40}>
      <Group position="apart" mt="xl">
        <h1>Hi there!</h1>
        <Button type="submit" onClick={baseLogout}>
          Log out
        </Button>
      </Group>
    </Container>
  );
}
