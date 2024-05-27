"use client";
import cx from "clsx";
import {
  ActionIcon,
  useMantineColorScheme,
  useComputedColorScheme,
  Group,
} from "@mantine/core";
import { TbSunHigh, TbMoon } from "react-icons/tb";

import React, { useEffect } from "react";

const ThemeSwitchToggle = () => {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(computedColorScheme);
    localStorage.setItem("theme", computedColorScheme);
  }, [computedColorScheme]);

  return (
    <Group justify="center">
      <ActionIcon
        onClick={() =>
          setColorScheme(computedColorScheme === "light" ? "dark" : "light")
        }
        variant="light"
        size="xl"
        aria-label="Toggle color scheme"
      >
        <TbSunHigh
          className={cx("text-primary", {
            hidden: computedColorScheme === "dark",
          })}
          size={24}
        />
        <TbMoon
          className={cx("text-primary", {
            hidden: computedColorScheme === "light",
          })}
          size={24}
        />
      </ActionIcon>
    </Group>
  );
};

export default React.memo(ThemeSwitchToggle);
