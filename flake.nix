{
  description = "Tabdoc - documentation for the Tablo ecosystem";

  inputs = {
    flake-parts.url = "github:hercules-ci/flake-parts";
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-25.11";
  };

  outputs =
    inputs@{ flake-parts, ... }:
    flake-parts.lib.mkFlake { inherit inputs; } {
      systems = [
        "x86_64-linux"
        "aarch64-linux"
        "aarch64-darwin"
        "x86_64-darwin"
      ];
      perSystem =
        { config, pkgs, ... }:
        let

          pkgsPackages = with pkgs; [
            glow
            nodejs_24
            yarn
            prettier
            git-lfs
          ];

          packages = pkgsPackages;

        in
        {
          devShells = {
            default = pkgs.mkShell {
              buildInputs = packages;
            };
          };
        };
    };
}
