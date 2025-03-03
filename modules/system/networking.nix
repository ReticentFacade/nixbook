{pkgs, ...}: {
  networking = {
    hostName = "nixbook";

    networkmanager = {
      enable = true;
    };

    # Enables wireless support via wpa_supplicant
    # wireless = {
    #   enable = true;
    # };
  };
}
