{
  config,
  pkgs,
  inputs,
  lib,
  ...
}: {
  imports = [
    ./hardware-configuration.nix
    # -------
    # It is 11,4 actually (use sudo cat /sys/devices/virtual/dmi/id/product_name to know)
    # But we're using 11,5 'cause that's available (and almost identical)
    # <nixos-hardware/apple/macbook-pro/11-5>
    # -------
    ./modules/system/boot.nix
    ./modules/system/networking.nix
    ./modules/system/services.nix
    ./modules/system/users.nix
    # ./modules/shared/fonts.nix
  ];

  nix = {
    settings = {
      experimental-features = ["nix-command" "flakes"];
      auto-optimise-store = true;
    };

    gc = {
      automatic = true;
      dates = "weekly";
      options = "--delete-older-than 7d";
    };
  };

  hardware.bluetooth.enable = true; # enables support for Bluetooth
  hardware.bluetooth.powerOnBoot = true; # powers up the default Bluetooth controller on boot

  hardware.bluetooth.settings = {
    General = {
      Experimental = true;
    };
  };

  # programs.firefox.enable = true;
  # programs.hyprland.enable = true;

  # For custom system-keybinds {using kmonad}:
  services.udev.extraRules = ''
    KERNEL=="event*", ATTRS{name}=="Apple Internal Keyboard", TAG+="uaccess"
    KERNEL=="event*", ATTRS{name}=="Evision Kreo Hive RGB", TAG+="uaccess"
  '';

  time.timeZone = "Asia/Kolkata";

  # Select internationalisation properties.
  i18n = {
    defaultLocale = "en_US.UTF-8";

    extraLocaleSettings = {
      LC_ADDRESS = "en_US.UTF-8";
      LC_IDENTIFICATION = "en_US.UTF-8";
      LC_MEASUREMENT = "en_US.UTF-8";
      LC_MONETARY = "en_US.UTF-8";
      LC_NAME = "en_US.UTF-8";
      LC_NUMERIC = "en_US.UTF-8";
      LC_PAPER = "en_US.UTF-8";
      LC_TELEPHONE = "en_US.UTF-8";
      LC_TIME = "en_US.UTF-8";
    };
  };

  security = {
    rtkit = {
      enable = true;
    };
  };

  nixpkgs.config.allowUnfree = true;
  nixpkgs.config.allowUnfreePredicate = pkg:
    builtins.elem (lib.getName pkg) [
      "zoom-us"
    ];

  # List packages installed in system profile. To search, run:
  # $ nix search wget
  environment.systemPackages = with pkgs; [
    vim
    onefetch
    bluez
    # adwaita-icon-theme
    # iw
    # git
    # wget
    # libreoffice
    #
    # inputs.helix.packages."${pkgs.system}".helix
    #
    # curl
    # ghostty
    # tree
    # fastfetch
  ];

  system.stateVersion = "24.11";
}
