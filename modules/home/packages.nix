{pkgs, ...}: let
  pythonWithPip = pkgs.python312.withPackages (ps: with ps; [pip]);
in {
  # {pkgs, ...}: {
  home = {
    packages = with pkgs; [
      (writeScriptBin "cow" ''
        #!/usr/bin/env bash
        cowsay $(fortune)
      '')
      # (python3.withPackages (ps: with ps; [pip]))

      brave
      # spotify

      # postgresql_18
      docker
      openjdk17
      docker
      docker-compose
      jq
      # hyperledger-fabric-ca
      libreoffice
      obsidian
      gimp
      waypaper
      hyprland
      # hyprpanel
      # uwsm
      adwaita-icon-theme
      curl

      pythonWithPip
      # python3
      # pipenv
      vscode
      zoom-us
      anydesk
      teamviewer
      newsflash
      (prismlauncher.override {jdks = [jdk8 jdk17 jdk21];})
      remmina
      nwg-displays
      playerctl

      sqlite
      # gcc
      # gcc11
      gcc14
      fastfetch
      tmux
      nnn

      zip
      xz
      unzip
      p7zip
      ripgrep
      jq
      yq-go
      eza
      fzf
      mtr
      iperf3
      iw
      dnsutils
      ldns
      aria2
      socat
      nmap
      ipcalc
      cowsay
      fortune
      file
      which
      tree
      gnused
      gnutar
      gawk
      zstd
      gnupg
      nix-output-monitor
      glow
      btop
      iotop
      iftop
      strace
      ltrace
      lsof
      sysstat
      lm_sensors
      ethtool
      pciutils
      usbutils

      go
      zig
      bun
      cmake
      # clang
      rustup
      nodejs
      corepack

      obs-studio
      obs-studio-plugins.wlrobs
      obs-studio-plugins.obs-pipewire-audio-capture

      zls
      gopls
      pyright
      marksman
      lua-language-server
      golangci-lint
      golangci-lint-langserver
      vscode-langservers-extracted
      typescript-language-server
      tailwindcss-language-server
      # svelte-language-server
      markdownlint-cli
      nixfmt-classic
      alejandra
      nixd
      nil
      grimblast
      grim
      slurp
      whitesur-cursors

      colloid-gtk-theme
      zuki-themes
      graphite-gtk-theme
      papirus-icon-theme
      nwg-look
    ];
  };
}
