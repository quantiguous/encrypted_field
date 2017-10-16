require 'encrypted_field'
require 'rails'

class EncryptedField::Railtie < Rails::Railtie
  rake_tasks do
    load 'tasks/generate_keypair.rake'
  end
end