set -e
set -x

# check local has no links

linkchecker http://localhost:4567

# build site
bundle exec middleman build

# upload site
aws s3 sync build s3://ensemblejs.com --acl public-read --cache-control "public, max-age=86400" --profile $1

# check site
linkchecker http://ensemblejs.com

# generate sitemap
linkchecker --verbose -o sitemap http://ensemblejs.com > build/sitemap.xml

# upload sitemap
aws s3 sync build s3://ensemblejs.com --acl public-read --cache-control "public, max-age=86400" --profile $1