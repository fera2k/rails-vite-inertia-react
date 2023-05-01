class AddUsernameToUser < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :username, :string, limit: 30
    add_index :users, :username, unique: true
  end
end
