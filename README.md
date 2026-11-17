# VPN guide

The page is published with GitHub Pages. The six profile values are kept in the repository's Actions secrets and are inserted into the published page during the build. The resulting site and its profiles are public.

To update the profiles, change the six `VPN_*` Actions secrets and run the publishing workflow. Never commit the generated `_site` directory.
