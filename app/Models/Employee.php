<?php

declare(strict_types=1);

namespace App\Models;

use App\Enums\ContactType;
use App\Enums\Gender;
use App\Enums\IdentificationType;
use App\Enums\InsuranceClass;
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
use Illuminate\Database\Eloquent\Relations\HasOne;

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
        'insurance_class',

        'created_by',
        'updated_by',
    ];

    public function casts(): array
    {
        return [
            'gender' => Gender::class,
            'marital_status' => MaritalStatus::class,
            'religion' => Religion::class,
            'date_of_birth' => 'datetime',
            'is_active' => 'boolean',
            'has_salary' => 'boolean',
            'has_biometric' => 'boolean',
            'works_on_saturday' => 'boolean',
            'joining_date' => 'date',
            'resignation_date' => 'date',
            'has_married_contract' => 'boolean',
            'vacation_class' => VacationClass::class,
            'special_needs' => SpecialNeeds::class,
            'insurance_class' => InsuranceClass::class,
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

        $male = 'storage/profile/male.png';
        $femlae = 'storage/profile/female.png';

        if ($gender === Gender::MALE) {
            return asset($male);
        }

        /** @var Gender $gender */
        if ($gender === Gender::FEMALE) {
            return asset($femlae);
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
        return $this->belongsToMany(Position::class)
            ->withPivot('start_date', 'end_date');
    }

    /**
     * @return BelongsToMany<Department, $this>
     */
    public function departments(): BelongsToMany
    {
        return $this->belongsToMany(Department::class, 'department_employee');
    }

    /**
     * @return BelongsToMany<Entity, $this>
     */
    public function entities(): BelongsToMany
    {
        return $this->belongsToMany(Entity::class, 'employee_entity')
            ->withPivot('start_date', 'end_date');
    }

    /**
     * @return BelongsToMany<College, $this>
     */
    public function colleges(): BelongsToMany
    {
        return $this->belongsToMany(College::class, 'college_employee')
            ->withPivot('start_date', 'end_date');
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
        return $this->hasMany(Qualification::class)
            ->orderBy('is_active', 'desc')
            ->orderBy('graduation_date', 'desc');
    }

    /**
     * @return HasManyThrough<Institution, DepartmentEmployee, $this>
     */
    public function institutions(): HasManyThrough
    {
        return $this->hasManyThrough(Institution::class, DepartmentEmployee::class);
    }

    /**
     * @return HasMany<Contact, $this>
     */
    public function mobile(): HasMany
    {
        return $this->hasMany(Contact::class)
            ->where('type', ContactType::MOBILE->value);
    }

    /**
     * @return HasMany<Contact, $this>
     */
    public function email(): HasMany
    {
        return $this->hasMany(Contact::class)
            ->where('type', ContactType::EMAIL->value);
    }

    /**
     * @return HasMany<Contact, $this>
     */
    public function phone(): HasMany
    {
        return $this->hasMany(Contact::class)
            ->where('type', ContactType::PHONE->value);
    }

    /**
     * @return HasOne<Bank, $this>
     */
    public function bank(): HasOne
    {
        return $this->hasOne(Bank::class);
    }

    /**
     * @return HasOne<Address, $this>
     */
    public function address(): HasOne
    {
        return $this->hasOne(Address::class);
    }

    /**
     * @return HasMany<EmergencyContact, $this>
     */
    public function contacts(): HasMany
    {
        return $this->hasMany(EmergencyContact::class);
    }

    /**
     * @return HasMany<AcademicExperience, $this>
     */
    public function academicExperience(): HasMany
    {
        return $this->hasMany(AcademicExperience::class);
    }

    /**
     * @return HasMany<Experience, $this>
     */
    public function experiences(): HasMany
    {
        return $this->hasMany(Experience::class);
    }

    /**
     * @return HasMany<Salary, $this>
     */
    public function salaries(): HasMany
    {
        return $this->hasMany(Salary::class)
            ->orderBy('effective', 'desc');
    }

    /**
     * @return HasMany<Achievement, $this>
     */
    public function achievements(): HasMany
    {
        return $this->hasMany(Achievement::class)
            ->orderBy('year', 'desc');
    }

    /**
     * @return HasMany<Research, $this>
     */
    public function researches()
    {
        return $this->hasMany(Research::class);
    }

    /**
     * @return HasMany<Course, $this>
     */
    public function courses(): HasMany
    {
        return $this->hasMany(Course::class);

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
