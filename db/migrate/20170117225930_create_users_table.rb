class CreateUsersTable < ActiveRecord::Migration[5.0]
  def change
    create_table :users_tables do |t|
      t.string :username
    end
  end
end
