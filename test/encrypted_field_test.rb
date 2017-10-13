require 'test_helper'

class EncryptedFieldTest < Minitest::Test
  def test_that_it_has_a_version_number
    refute_nil ::EncryptedField::VERSION
  end
end
