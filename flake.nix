{
  description = "Moi firmst NixOS flakee";

  inputs = {
    nixpkgs = {
      url = "github:NixOS/nixpkgs/nixos-unstable";
    };
    nixos-hardware = {
      url = "github:Nixos/nixos-hardware";
    };
    # helix = {
    #   url = "github:helix-editor/helix/master";
    # };
    home-manager = {
      url = "github:nix-community/home-manager";
      # The `follows` keyword in inputs is used for inheritance.
      inputs.nixpkgs.follows = "nixpkgs";
    };
    # hyprpanel = {
    #   url = "github:Jas-SinghFSU/HyprPanel";
    #   inputs.nixpkgs.follows = "nixpkgs";
    # };
  };

  outputs = inputs @ {
    self,
    nixpkgs,
    nixos-hardware,
    home-manager,
    ...
  }: {
    nixosConfigurations.nixbook = nixpkgs.lib.nixosSystem {
      system = "x86_64-linux";
      specialArgs = {inherit inputs;};

      modules = [
        ./configuration.nix

        # Hardware
        nixos-hardware.nixosModules.apple-macbook-pro-11-5
        nixos-hardware.nixosModules.common-gpu-amd-southern-islands
        # ------

        home-manager.nixosModules.home-manager
        {
          home-manager = {
            useGlobalPkgs = true;
            useUserPackages = true;
            users.reticent = import ./home.nix;
            backupFileExtension = "backup";
          };
        }
      ];
    };
  };
}
