class CreateAddresses < ActiveRecord::Migration
  def change
    create_table :addresses do |t|
      t.string :email
      t.timestamps
    end
  end
end
