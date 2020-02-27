<?php

use App\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Spatie\Permission\Traits\HasRoles;

class UsersTableSeeder extends Seeder
{
    use HasRoles;
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $user = new App\User();
        $user->password = Hash::make('qwerty1234');
        $user->email = 'admin@admin.ru';
        $user->name = 'Admin';
        $user->save();

        $user->assignRole('Admin');
    }
}
