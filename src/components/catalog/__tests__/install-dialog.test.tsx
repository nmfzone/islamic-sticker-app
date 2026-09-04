import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { InstallDialog } from "../install-dialog";

describe("InstallDialog", () => {
  it("opens from the icon-only affordance and closes with focus restored", async () => {
    // Given
    const user = userEvent.setup();
    render(<InstallDialog packTitle="Jumuah Light" />);
    const trigger = screen.getByRole("button", {
      name: "Install Jumuah Light sticker pack",
    });

    // When
    await user.click(trigger);

    // Then
    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Coming soon" })).toBeInTheDocument();
    expect(screen.getByText(/WhatsApp and Telegram installation/i)).toBeInTheDocument();

    // When
    await user.click(screen.getByRole("button", { name: "Got it" }));

    // Then
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    expect(trigger).toHaveFocus();
  });

  it("dismisses with Escape and returns focus", async () => {
    // Given
    const user = userEvent.setup();
    render(<InstallDialog packTitle="Little Muslims" />);
    const trigger = screen.getByRole("button", {
      name: "Install Little Muslims sticker pack",
    });
    await user.click(trigger);

    // When
    await user.keyboard("{Escape}");

    // Then
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    expect(trigger).toHaveFocus();
  });
});
