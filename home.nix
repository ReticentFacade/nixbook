{
  config,
  pkgs,
  ...
}: {
  imports = [
    ./modules/home/packages.nix
    ./modules/home/editors/neovim.nix
    ./modules/home/editors/tmux.nix
    ./modules/home/shells/bash.nix
    ./modules/home/shells/nu.nix
    ./modules/home/shells/starship.nix
    ./modules/home/utils/git.nix
    ./modules/home/utils/bat.nix
    ./modules/home/terminals/ghostty.nix
    ./modules/home/programs/zoxide.nix
    ./modules/home/programs/firefox.nix
    # ./modules/home/desktop/hyprland.nix
  ];

  home = {
    username = "reticent";
    homeDirectory = "/home/reticent";
    stateVersion = "24.11";

    # # Persistent directories
    # persistence."/persist/home/reticent" = {
    #   directories = [
    #     ".config/BraveSoftware/Brave-Browser"
    #   ];
    # };
  };

  # home.file.".config/BraveSoftware/Brave-Browser".source = ./brave-config/Brave-Browser;

  programs.home-manager.enable = true;
}
