<?php

declare(strict_types=1);

namespace App\Models;

use App\Enums\Gender;
use App\Enums\IdentificationType;
use App\Enums\MaritalStatus;
use App\Enums\Religion;
use App\Enums\SpecialNeeds;
use App\Enums\VacationClass;
use App\Traits\TracksUser;
use Illuminate\Database\Eloquent\Attributes\Scope;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasManyThrough;

final class Employee extends Model
{
    /** @use HasFactory<\Database\Factories\EmployeeFactory> */
    use HasFactory, TracksUser;

    protected $fillable = [
        'first_name_en',
        'middle_name_en',
        'third_name_en',
        'last_name_en',
        'first_name_ar',
        'middle_name_ar',
        'third_name_ar',
        'last_name_ar',
        'gender',
        'marital_status',
        'nationality_id',
        'religion',
        'home_country_id',
        'date_of_birth',
        'place_of_birth',

        'user_id',
        'code',
        'head_id',
        'is_active',
        'has_salary',
        'has_biometric',
        'works_on_saturday',
        'joining_date',
        'resignation_date',
        'sponsorship_id',
        'has_married_contract',
        'vacation_class',
        'special_needs',

        'created_by',
        'updated_by',
    ];

    public function casts(): array
    {
        return [
            'gender' => Gender::class,
            'marital_status' => MaritalStatus::class,
            'religion' => Religion::class,
            'date_of_birth' => 'date',
            'is_active' => 'boolean',
            'has_salary' => 'boolean',
            'has_biometric' => 'boolean',
            'works_on_saturday' => 'boolean',
            'joining_date' => 'date',
            'resignation_date' => 'date',
            'has_married_contract' => 'boolean',
            'vacation_class' => VacationClass::class,
            'special_needs' => SpecialNeeds::class,
        ];
    }

    /**
     * @return Attribute<string, string>
     */
    public function englishName(): Attribute
    {
        $name = $this->first_name_en.' ';
        if ($this->middle_name_en) {
            $name .= $this->middle_name_en.' ';
        }
        if ($this->third_name_en) {
            $name .= $this->third_name_en.' ';
        }
        $name .= $this->family_name_en;

        return new Attribute(
            get: fn () => $name,
        );
    }

    /**
     * @return Attribute<string, string>
     */
    public function arabicName(): Attribute
    {
        $name = $this->first_name_ar.' ';
        if ($this->middle_name_ar) {
            $name .= $this->middle_name_ar.' ';
        }
        if ($this->third_name_ar) {
            $name .= $this->third_name_ar.' ';
        }
        $name .= $this->family_name_ar;

        return new Attribute(
            get: fn () => $name,
        );
    }

    public function profileImage(): ?string
    {
        $path = "storage/profile/{$this->code}.jpeg";
        if (file_exists($path)) {
            return asset($path);
        }
        /** @var Gender $gender */
        $gender = $this->gender;

        if ($gender === Gender::MALE) {
            return asset('storage/profile/male.png');
        }

        /** @var Gender $gender */
        if ($gender === Gender::FEMALE) {
            return asset('storage/profile/female.png');
        }

        return null;
    }

    /**
     * @return BelongsTo<Country, $this>
     */
    public function nationality(): BelongsTo
    {
        return $this->belongsTo(Country::class, 'nationality_id');
    }

    /**
     * @return BelongsTo<User, $this>
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * @return BelongsTo<Employee, $this>
     */
    public function head(): BelongsTo
    {
        return $this->belongsTo(self::class, 'head_id');
    }

    /**
     * @return BelongsTo<Sponsorship, $this>
     */
    public function sponsorship(): BelongsTo
    {
        return $this->belongsTo(Sponsorship::class);
    }

    /**
     * @return BelongsToMany<Category, $this>
     */
    public function categories(): BelongsToMany
    {
        return $this->belongsToMany(Category::class);
    }

    /**
     * @return BelongsToMany<Position, $this>
     */
    public function positions(): BelongsToMany
    {
        return $this->belongsToMany(Position::class);
    }

    /**
     * @return BelongsToMany<Department, $this>
     */
    public function departments(): BelongsToMany
    {
        return $this->belongsToMany(Department::class, 'department_employee');
    }

    /**
     * @return HasMany<Dependent, $this>
     */
    public function dependents(): HasMany
    {
        return $this->hasMany(Dependent::class);
    }

    /**
     * @return BelongsToMany<Extention, $this>
     */
    public function extentions(): BelongsToMany
    {
        return $this->belongsToMany(Extention::class);
    }

    /**
     * @return BelongsTo<Identification, $this>
     */
    public function nationalId(): BelongsTo
    {
        return $this->belongsTo(Identification::class, 'id', 'employee_id')
            ->where('type', IdentificationType::NID);
    }

    /**
     * @return BelongsTo<Identification, $this>
     */
    public function passport(): BelongsTo
    {
        return $this->belongsTo(Identification::class, 'id', 'employee_id')
            ->where('type', IdentificationType::PASSPORT);
    }

    /**
     * @return HasMany<Qualification, $this>
     */
    public function qualification(): HasMany
    {
        return $this->hasMany(Qualification::class)
            ->where('is_active', true);
    }

    /**
     * @return HasMany<Qualification, $this>
     */
    public function qualifications(): HasMany
    {
        return $this->hasMany(Qualification::class);
    }

    /**
     * @return HasManyThrough<Institution, DepartmentEmployee, $this>
     */
    public function institutions(): HasManyThrough
    {
        return $this->hasManyThrough(Institution::class, DepartmentEmployee::class);
    }

    /**
     * @param  Builder<Employee>  $query
     */
    #[Scope]
    protected function active(Builder $query): void
    {
        $query->where('is_active', 1);
    }
}
