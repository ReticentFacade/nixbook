{ pkgs, ... }:

let
  material-black = pkgs.stdenvNoCC.mkDerivation {
    pname = "material-black-blueberry";
    version = "3.0.3";

    src = ../../../themes/Material-Black-Blueberry-3.0.3.tar;

    installPhase = ''
  mkdir -p $out/share/themes/Material-Black-Blueberry
  cp -r . $out/share/themes/Material-Black-Blueberry/
'';
  };
in
{
  gtk = {
    enable = true;

    theme = {
      name = "Material-Black-Blueberry";
      package = material-black;
    };

    iconTheme = {
      name = "Material-Black-Blueberry-Suru";
      package = pkgs.material-black-colors;
    };
  };
}
