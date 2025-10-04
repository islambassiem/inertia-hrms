<?php

declare(strict_types=1);

use App\Models\College;
use App\Models\Employee;
use App\Models\Entity;
use App\Models\User;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('_departments', function (Blueprint $table) {
            $table->id();
            $table->string('code', 10)->nullable()->unique();
            $table->string('department_en', 30)->unique();
            $table->string('department_ar', 30)->unique();
            $table->foreignIdFor(Employee::class, 'head_id')->constrained();
            $table->foreignIdFor(Entity::class)->constrained();
            $table->foreignIdFor(College::class)->nullable()->constrained();
            $table->foreignIdFor(User::class, 'created_by')->nullable()->constrained();
            $table->foreignIdFor(User::class, 'updated_by')->nullable()->constrained();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('_departments');
    }
};
