# RVIR (Rails + ViteJS + InertiaJS + React) Template

This is a template of a Rails application setup to quickly an [Rails](https://rubyonrails.org/) App that uses [InertiaJS](https://inertiajs.com/) and [React](https://react.dev/), powered by [ViteJS](https://vitejs.dev/).

The React component's are based on [Chakra-UI](https://chakra-ui.com/) and [UnoCSS](https://unocss.dev/).

Tests are set up with [RSpec](https://rspec.info/) and [Jest](https://jestjs.io).

This project is coded in VSCode and has configs for linting with [ESLint](https://eslint.org/), [Prettier](https://prettier.io/) and [Rubocop](https://rubocop.org/).

# Setup

1. Before Cloning make sure you have this installed:
* Ruby 3.2.0
* Node 18.14.0

If you have [asdf](https://asdf-vm.com/) installed, you can run `asdf install` after you cloned the repo. (Make sure you have the node and ruby asdf plugins added)

1. Clone Repo
2. Install Ruby dependencies
> ```bundle install```
3. Install Node dependencies
> ```npm install```
4. Initialize Database
> ```rails db:create & rails db:migrate & rails db:seed```
5. Start App in Dev mode
> ```bin/dev```

