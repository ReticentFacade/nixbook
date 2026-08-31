{ pkgs, ... }:

let
  material-black = pkgs.stdenvNoCC.mkDerivation {
    pname = "material-black-blueberry";
    version = "3.0.3";

    src = ../../../themes/Material-Black-Blueberry-3.0.3.tar;

    installPhase = ''
      mkdir -p $out
      cp -r . $out/
    '';
  };
in {
  home.file.".themes/Material-Black-Blueberry".source =
    "${material-black}";

  home.file.".icons/Material-Black-Blueberry-Suru".source =
    "${pkgs.material-black-colors}/share/icons/Material-Black-Blueberry-Suru";

  dconf.settings."org/gnome/desktop/interface" = {
    gtk-theme = "Material-Black-Blueberry";
    icon-theme = "Material-Black-Blueberry-Suru";
  };
}
