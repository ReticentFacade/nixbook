{
  config,
  pkgs,
  # lib,
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

    # packages = with pkgs; [
    #   (pkgs.brave.overrideAttrs (oldAttrs: {
    #     postFixup = ''
    #       wrapProgram $out/bin/brave --add-flags "--user-data-dir=${builtins.getEnv "HOME"}/brave-profile"
    #     '';
    #   }))
    # ];
    #
    # activation = {
    #   linkBraveProfile = lib.hm.dag.entryAfter ["writeBoundary"] ''
    #     rm -rf ~/.config/BraveSoftware/Brave-Browser
    #     ln -sfn ~/brave-profile ~/.config/BraveSoftware/Brave-Browser
    #   '';
    # };

    sessionVariables = {
      PATH = "$HOME/fabric-tools/fabric-samples/bin";
    };
  };

  programs.brave = {
    enable = true;
    package = pkgs.brave;
  };

  # programs.nushell = {
  #   enable = true;
  #   extraConfig = ''
  #     $env.PATH = ($env.PATH | append $"($env.HOME)/fabric-samples/bin")
  #   '';
  # };

  programs.home-manager.enable = true;
}
