class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :name
      t.string :screen_name
      t.string :location
      t.string :profile_image
      t.string :uid
      t.string :oauth_token
      t.string :oauth_secret
      t.integer :wins, default: 0
      t.integer :losses, default: 0

      t.timestamps
    end
  end
end
