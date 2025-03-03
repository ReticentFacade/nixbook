{pkgs, ...}: {
  programs.ghostty = {
    enable = true;
    package = pkgs.ghostty;
    settings = {
      copy-on-select = true;
      theme = "GruvboxDarkHard";
      font-size = 10;
      font-family = "Fira Code";
      # font-family = "0xProto Nerd Font";
      keybind = [
        "ctrl+h=goto_split:left"
        "ctrl+l=goto_split:right"
      ];
      window-decoration = false;
      gtk-titlebar = false;
      window-padding-x = 4;
      window-padding-y = 4;
      window-inherit-working-directory = true;
      adjust-underline-position = 4;
      mouse-hide-while-typing = true;
      mouse-scroll-multiplier = 1;
      cursor-invert-fg-bg = true;
      selection-invert-fg-bg = true;
      bold-is-bright = true;
      cursor-style = "underline";
      background-opacity = 1;
      adjust-cell-height = "12%";
      adjust-cell-width = "2%";
      gtk-single-instance = true;
    };
  };
}
