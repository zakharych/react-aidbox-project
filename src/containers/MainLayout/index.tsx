// This string necessary for use svg as  ReactComponent
/// <reference types="vite-plugin-svgr/client" />

import { Button, Container, Group, createStyles, Header } from "@mantine/core";

import { baseLogout } from "../../services/auth";
import s from "./Main.module.scss";
import { useState } from "react";
import { ReactComponent as Logo } from "../../assets/logoWide.svg";
import { PatientList } from "../PatientList";

const useStyles = createStyles((theme) => ({
  inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: 56,

    [theme.fn.smallerThan("sm")]: {
      justifyContent: "flex-start",
    },
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: "8px 12px",
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },

  linkActive: {
    "&, &:hover": {
      backgroundColor: theme.fn.variant({
        variant: "light",
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
        .color,
    },
  },
}));

type Link = { link: string; label: string };

export default function MainLayout() {
  const links: Link[] = [
    { label: "Patients", link: "" },
    { label: "Encounters", link: "" },
  ];
  const [active, setActive] = useState(links[0].label);
  const { classes, cx } = useStyles();

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={cx(classes.link, {
        [classes.linkActive]: active === link.label,
      })}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.label);
      }}
    >
      {link.label}
    </a>
  ));
  return (
    <>
      <Header height={56} mb={120}>
        <Container className={classes.inner}>
          <Group className={classes.links} spacing={5}>
            {items}
          </Group>

          <Logo className={s.logo} />

          <Button type="submit" onClick={baseLogout}>
            Log out
          </Button>
        </Container>
      </Header>
      <Group position="apart" mt="xl">
        <PatientList />
      </Group>
    </>
  );
}
